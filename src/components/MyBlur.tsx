import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { add, BackdropFilter, Blur, Canvas, Circle, Fill, LinearGradient, mix, sub, useDerivedValue, useLoop, vec } from '@shopify/react-native-skia'


const { height, width } = Dimensions.get('window')

const c = vec(width / 2, (height / 2) * 1.5);

const r = c.x - 32;

const MyBlur = () => {


    const progress = useLoop({duration:5000 });
    const start = useDerivedValue(() => sub(c, vec(0, mix(progress.current, r, r))),
        [progress],
    )
    const end = useDerivedValue(() => add(c, vec(0, mix(progress.current, r, r/2))),
        [progress],
    )

    const radius = useDerivedValue(() => mix(progress.current, r, r/2), [progress])

    return (
        <Canvas style={{ width:'100%', height:'100%', position:'absolute' }}>
            <Fill color={'#e5e8ef'}></Fill>
            <Circle
                c={c}
                r={radius}
            >
                <LinearGradient
                    start={start}
                    end={end}
                    colors={['cyan', '#FFBBC2']}
                />
            </Circle>
            <BackdropFilter  filter={<Blur blur={20}/>}>
                <Fill color={'#DFE3E610'}/>
            </BackdropFilter>
        </Canvas>
    )
}

export default MyBlur