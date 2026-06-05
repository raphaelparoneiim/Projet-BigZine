#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

varying vec2 vTexCoord;

void main() {
  vec2 uv = (gl_FragCoord.xy / u_resolution.xy) - 0.5;
  uv.x *= u_resolution.x / u_resolution.y;
  float d = length(uv);
  float angle = atan(uv.y, uv.x);
  float waves = sin(d * 18.0 - u_time * 2.5);
  float bands = sin(angle * 3.0 + u_time * 1.5);
  vec3 color = 0.5 + 0.5 * cos(vec3(0.0, 2.0, 4.0) + waves + bands * 1.5);
  color *= smoothstep(0.7, 0.0, d);
  gl_FragColor = vec4(color, 1.0);
}
