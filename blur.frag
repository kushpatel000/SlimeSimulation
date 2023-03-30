precision mediump float;

uniform sampler2D tex0;

uniform vec2 blurDirection;
uniform vec2 resolution;

varying vec2 vTexCoord; // scaled from (0 .. 1)

// Todo1: send calculated kernel here
// uniform int N;
// uniform int M;
const int M = 16;
const int N = 33;
uniform float kernel1D[33];

void main() {
    vec4 sum = vec4(0.0);
    vec2 tc = vTexCoord;

    // see this code https://lisyarus.github.io/blog/graphics/2022/04/21/compute-blur.html
    // Todo 2: write kernel scaling here:
    for( int i = 0; i < N; i++){
        vec2 tc = vTexCoord + blurDirection * float(i-M) / resolution;
        sum += kernel1D[i] * texture2D(tex0, tc );
    }


    // Apply the blur effect using a 9-tap filter
    // sum += texture2D(tex0, vec2(tc.x - 4.0*blurAmount, tc.y)) * 0.05;
    // sum += texture2D(tex0, vec2(tc.x - 3.0*blurAmount, tc.y)) * 0.09;
    // sum += texture2D(tex0, vec2(tc.x - 2.0*blurAmount, tc.y)) * 0.12;
    // sum += texture2D(tex0, vec2(tc.x - blurAmount, tc.y)) * 0.15;
    // sum += texture2D(tex0, vec2(tc.x, tc.y)) * 0.16;
    // sum += texture2D(tex0, vec2(tc.x + blurAmount, tc.y)) * 0.15;
    // sum += texture2D(tex0, vec2(tc.x + 2.0*blurAmount, tc.y)) * 0.12;
    // sum += texture2D(tex0, vec2(tc.x + 3.0*blurAmount, tc.y)) * 0.09;
    // sum += texture2D(tex0, vec2(tc.x + 4.0*blurAmount, tc.y)) * 0.05;

    gl_FragColor = sum;
    // gl_FragColor = texture2D(tex0, vec2(tc.x, tc.y));
    // gl_FragColor = vec4( 0.0, 1.0, tc.x, 1.0 );
}


