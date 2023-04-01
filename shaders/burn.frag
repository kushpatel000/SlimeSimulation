#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform sampler2D u_tex;
uniform float u_burnrate;

varying vec2 vTexCoord;

void main() {
    vec2 st = vTexCoord;

    vec4 color = texture2D( u_tex, vTexCoord );
    color.rgb *= u_burnrate;
    gl_FragColor = color;
}
