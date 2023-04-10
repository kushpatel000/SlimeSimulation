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

    // apply additional decay at edges
    if ( st.x > 0.99 || st.x < 0.01 ) {
        float edge_scale = 1.49 - abs(st.x-0.5);
        sum = edge_scale * sum;
    }
    if ( st.y > 0.99 || st.y < 0.01 ) {
        float edge_scale = 1.49 - abs(st.y-0.5);
        sum = edge_scale * sum;
    }

    gl_FragColor = vec4(sum.rgb, 1.0);
}
