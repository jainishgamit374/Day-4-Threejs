// precision mediump float;

uniform float uTime;  // Time uniform
varying vec2 vUv;     // UV coordinates from vertex shader

void main() {
    // Generate a color based on UV coordinates and animate the color over time
    vec3 color = vec3(0.02, 0.02, 0.97);

    gl_FragColor = vec4(color, 1.0);  // Output the color
}
