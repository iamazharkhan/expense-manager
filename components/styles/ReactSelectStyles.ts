import { StylesConfig } from 'react-select/src/styles'
import { theme } from './theme'

const ReactSelectStyles: StylesConfig = {
  menu: (provided: any) => {
    const customStyles = {
      boxShadow: theme.simpleBoxShadow,
      cursor: 'pointer'
    }
    return { ...provided, ...customStyles }
  },
  control: (provided, state) => ({
    ...provided,
    borderWidth: 1,
    width: 110,
    cursor: 'pointer'
  }),
  option: (provided) => ({ ...provided, cursor: 'pointer' })
}

const ReactSelectTheme = (defaultTheme: any) => ({
  ...defaultTheme,
  borderRadius: 4,
  borderWidth: 1,
  colors: {
    ...defaultTheme.colors,
    primary50: '#efefef',
    primary25: '#f1f1f1',
    primary: theme.black,
    neutral20: theme.darkGrey,
    neutral60: theme.black
  }
})

export { ReactSelectStyles, ReactSelectTheme }