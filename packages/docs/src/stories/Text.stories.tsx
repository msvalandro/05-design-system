import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, magni!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
