import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Schedule from '.'

storiesOf('Schedule', module)
  .add('default', () => (
    <Schedule>Hello</Schedule>
  ))
  .add('reverse', () => (
    <Schedule reverse>Hello</Schedule>
  ))
