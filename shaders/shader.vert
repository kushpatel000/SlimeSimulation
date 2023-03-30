// here follows vertex shader example from:
//    https://p5js.org/learn/getting-started-in-webgl-shaders.html

// position information used with gl_Position
attribute vec3 aPosition;

// texture coordinates
attribute vec2 aTexCoord;

// varying variable will pass the texture coordinate to frag shader
varying vec2 vTexCoord;

void main() {
    // assing attribute to varying, so it can be used in the fragment
    vTexCoord = aTexCoord;

    vec4 positionVec4 = vec4(aPosition, 1.0);
    positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
    gl_Position = positionVec4;
}