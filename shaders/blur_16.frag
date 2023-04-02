#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_dir;
uniform sampler2D u_tex;
uniform int u_M;

varying vec2 vTexCoord;

const int kernel_radius = 16;
const int kernel_max_len = 33;
uniform float u_kernel1D[kernel_max_len]; 


void main() {
    // vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 st = vTexCoord;

    // float rad = u_rad / u_resolution.x;

    vec4 sum = vec4(0.0);
    for (int i = 0; i < kernel_max_len; i++){
        vec2 shift = u_dir / u_resolution * float(i-kernel_radius);
        sum += texture2D( u_tex, vec2(st.x, st.y) + shift) * u_kernel1D[i];
    }

    gl_FragColor = vec4(sum.rgb, 1.0);
}
