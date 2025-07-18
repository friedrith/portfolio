import { Step } from './Step'

import * as emailWithoutPassword from '../providers/email-without-password'
import * as google from '../providers/google'
import * as facebook from '../providers/facebook'
import * as apple from '../providers/apple'
import { useStepContext } from './StepContext'

const identityProviders = {
  google,
  facebook,
  apple,
  // email: '',
  // phone: '',
  'email-without-password': emailWithoutPassword,
} as const

export type IdentityProviderName = keyof typeof identityProviders

export type SignProviders = Array<IdentityProviderName>

export type StepIdentifyOptions = {
  title?: string
  providers: IdentityProviderName[]
}

export type StepIdentifyProps = {
  options?: StepIdentifyOptions
  onNext?: () => void
  onBack?: () => void
}

export function StepIdentify({ options, onBack, onNext }: StepIdentifyProps) {
  const { signProviders } = useStepContext()

  return (
    <Step title={options?.title ?? 'Sign in'} onBack={onBack}>
      <div className="w-full flex flex-col items-stretch p-4 gap-4">
        <div className="flex items-center gap-3">
          {signProviders
            .filter((p) => !p.includes('email'))
            .map((providerName) => {
              const provider = identityProviders[providerName]

              if (!provider) {
                return null
              }

              return (
                <provider.SignButton
                  className="flex-1 md:w-auto"
                  onClick={onNext}
                  key={providerName}
                />
              )
            })}
        </div>

        <emailWithoutPassword.SignButton
          className="w-full md:w-auto"
          onClick={onNext}
        />
      </div>
    </Step>
  )
}
