
/**
 * Simple Color-Inverse Fragment Shader with intensity control.
 * 
 * Usage: the following parameters must be set:
 *   uDiffuseMap: image texture.
 *   amount: float that controls the amount of the inverse-color effect. 0 means none (normal color), while 1 means full inverse.
 *
 * Additionally, the Vertex shader that is paired with this Fragment shader must specify:
 *   varying vec2 vUv0: for the UV.
 */

#include "gammaPS"

// Additional varying from vertex shader
varying vec2 vUv0;

// Custom Parameters (must be set from code via material.setParameter())
uniform sampler2D uDiffuseMap;
uniform float amount;

void main(void)
{
    vec4 color = texture2D(uDiffuseMap, vUv0);
    vec3 roloc = 1.0 - color.rgb;
    gl_FragColor = vec4(gammaCorrectOutput(mix(color.rgb, roloc, amount)), color.a);
}