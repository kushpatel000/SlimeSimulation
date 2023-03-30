// here follows fragmentg shader example from:
//    https://p5js.org/learn/getting-started-in-webgl-shaders.html

precision mediump float;

varying vec2 vTexCoord;

void main() {
    // now because of the varying vTexCoord, we can access the current texture coordinate
    vec2 uv = vTexCoord;

    // and now these coordinates are assigned to the color of the output shader
    gl_FragColor = vec4(uv, 1.0, 1.0);

}