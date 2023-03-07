export interface inputPadrao {
    label?: string,
    name?: string,
    type?: "text" | "tel" | "number" | "email",
    placeholder?: string,
    required: boolean,
    value: string | number | undefined,
    setValue: React.Dispatch<React.SetStateAction<string>>
}
