#ifdef GL_ES
precision mediump float;
#endif

// vertex data
attribute vec3 aPosition;

// tex coordinates
attribute vec2 aTexCoord;

// variable shared with fragment shader
varying vec2 vTexCoord;

// Always include this to get the position of the pixel and map the shader
// correctly to the shape

void main() {
    // copy texture coordinates
    vTexCoord = aTexCoord;

    // Copy the postion data into a vec4, add 1.0 as the w parameter
    vec4 positionVec4 = vec4(aPosition, 1.0);

    // Scale to make the output fit the canvas
    positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

    // send the vertex information on to the fragment shader
    gl_Position = positionVec4;
}