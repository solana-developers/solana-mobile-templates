import { AppView } from '@/components/app-view'
import { AppText } from '@/components/app-text'

export function DemoFeature() {
  return (
    <AppView>
      <AppText variant="titleMedium">Demo page</AppText>
      <AppText>Start building your features here.</AppText>
    </AppView>
  )
}
