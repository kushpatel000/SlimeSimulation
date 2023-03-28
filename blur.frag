precision mediump float;

uniform sampler2D tex0;
uniform float blurAmount;

varying vec2 vTexCoord;

void main() {
  vec4 sum = vec4(0.0);
  vec2 tc = vTexCoord;

  // Apply the blur effect using a 9-tap filter
  sum += texture2D(tex0, vec2(tc.x - 4.0*blurAmount, tc.y)) * 0.05;
  sum += texture2D(tex0, vec2(tc.x - 3.0*blurAmount, tc.y)) * 0.09;
  sum += texture2D(tex0, vec2(tc.x - 2.0*blurAmount, tc.y)) * 0.12;
  sum += texture2D(tex0, vec2(tc.x - blurAmount, tc.y)) * 0.15;
  sum += texture2D(tex0, vec2(tc.x, tc.y)) * 0.16;
  sum += texture2D(tex0, vec2(tc.x + blurAmount, tc.y)) * 0.15;
  sum += texture2D(tex0, vec2(tc.x + 2.0*blurAmount, tc.y)) * 0.12;
  sum += texture2D(tex0, vec2(tc.x + 3.0*blurAmount, tc.y)) * 0.09;
  sum += texture2D(tex0, vec2(tc.x + 4.0*blurAmount, tc.y)) * 0.05;

  gl_FragColor = sum;
}
