#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform sampler2D u_tex;
uniform float u_rad;

varying vec2 vTexCoord;

void main() {
    // vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 st = vTexCoord;

    float rad = u_rad / u_resolution.x;

    vec4 sum = vec4(0.0);
    sum += texture2D( u_tex, vec2(st.x-rad, st.y-rad) ) / 16.0;
    sum += texture2D( u_tex, vec2(st.x    , st.y-rad) ) /  8.0;
    sum += texture2D( u_tex, vec2(st.x+rad, st.y-rad) ) / 16.0;
    sum += texture2D( u_tex, vec2(st.x-rad, st.y    ) ) /  8.0;
    sum += texture2D( u_tex, vec2(st.x    , st.y    ) ) /  4.0;
    sum += texture2D( u_tex, vec2(st.x+rad, st.y    ) ) /  8.0;
    sum += texture2D( u_tex, vec2(st.x-rad, st.y+rad) ) / 16.0;
    sum += texture2D( u_tex, vec2(st.x    , st.y+rad) ) /  8.0;
    sum += texture2D( u_tex, vec2(st.x+rad, st.y+rad) ) / 16.0;

    gl_FragColor = sum;
}

/*

1/4
11/2
1/16 1/8 1/16


*/


// see this code https://lisyarus.github.io/blog/graphics/2022/04/21/compute-blur.html
// Todo 2: write kernel scaling here:
// for( int i = 0; i < N; i++){
    // vec2 tc = vTexCoord + blurDirection * float(i-M) / u_resolution;
    // vec2 tc = vTexCoord;
    // sum += kernel1D[i] * texture2D(tex0, tc );
// }


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
