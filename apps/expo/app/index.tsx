import { Checkbox, Label } from '@my/ui'
import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'
import { Check } from '@tamagui/lucide-icons'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />

      <Checkbox size="$4" checked id="test">
        <Checkbox.Indicator>
          <Check />
        </Checkbox.Indicator>
      </Checkbox>
      <Label htmlFor="test">Hello world</Label>

      <HomeScreen />
    </>
  )
}
