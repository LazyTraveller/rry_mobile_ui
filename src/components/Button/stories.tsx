import React from 'react'
import Button from './button'
import { View } from '@tarojs/components'
function handleClick(): Promise<void> {
  console.log('click')
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, 2000)
  )
}

export const normal = () => (
  <View>
    默认
    <View>
      <Button>默认</Button>

      <Button type='primary'>主色</Button>
      <Button type='danger'>危险</Button>
      <Button
        type='link'
        onClick={() => {
          window.open('https://www.google.com')
        }}
      >
        Link
      </Button>
    </View>
    plain
    <View>
      <Button plain>默认</Button>
      <Button plain type='primary'>
        主色
      </Button>
      <Button plain type='danger'>
        危险
      </Button>
      <Button plain type='link'>
        Link
      </Button>
    </View>
    disabled
    <View>
      <Button disabled>默认</Button>
      <Button disabled type='primary'>
        主色
      </Button>
      <Button disabled type='danger'>
        危险
      </Button>
      <Button disabled type='link'>
        Link
      </Button>
    </View>
    size
    <View>
      <Button type='primary' mini>
        默认
      </Button>
      <Button mini>小按钮</Button>
      <Button mini type='link'>
        Link
      </Button>
      <Button mini type='link' className='m-text'>
        纯文字
      </Button>
    </View>
    block
    <View>
      <Button block type='primary'>
        主色
      </Button>
      <Button block mini plain>
        主色
      </Button>
    </View>
    noRound
    <View>
      <Button noRound type='primary'>
        主色
      </Button>
    </View>
  </View>
)




export default {
  title: '表单/Button',
}
