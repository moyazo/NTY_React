import { ReactNode } from "react"

export type buttonProps = {
    children?: ReactNode
    onclick?: () => void
    value?: string
}