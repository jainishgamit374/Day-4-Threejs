uniform float uTime;           

// varying vec2 vUv;              

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.z += 0.2 * sin(modelPosition.x * 4.8 + modelPosition.y * 2.2 + modelPosition.z * 1.5 + uTime * 6.0);

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}
