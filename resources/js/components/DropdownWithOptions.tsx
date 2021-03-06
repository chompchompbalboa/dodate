//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { RefObject, useEffect } from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const DropdownWithOptions = ({ 
  activeDropdownOptionIndex,
  children,
  className,
  containerRef,
  closeDropdown,
  dropdownOptions,
  isDropdownVisible,
  maxHeight = '50vh',
  selectDropdownOption,
  setActiveDropdownOptionIndex
}: IDropdownWithOptions) => {

  // Add event listeners when the dropdown is visible
  useEffect(() => {
    if(isDropdownVisible) {
      addEventListener('mousedown', closeDropdownOnClickOutside)
      addEventListener('keydown', handleDropdownKeydown)
    }
    else {
      removeEventListener('mousedown', closeDropdownOnClickOutside)
      removeEventListener('keydown', handleDropdownKeydown)
    }
    return () => {
      removeEventListener('mousedown', closeDropdownOnClickOutside)
      removeEventListener('keydown', handleDropdownKeydown)
    }
  }, [ 
    activeDropdownOptionIndex, 
    closeDropdown,
    containerRef && containerRef.current, 
    dropdownOptions, 
    isDropdownVisible,
    selectDropdownOption
  ])

  // Update the activeDropdownIndex when dropdownOptionsLength is 0
  useEffect(() => {
    if(dropdownOptions.length === 0 && activeDropdownOptionIndex !== 0) {
      setActiveDropdownOptionIndex(0)
    }
  }, [ activeDropdownOptionIndex, dropdownOptions.length ])

  // Close Dropdown On Click Outside
  const closeDropdownOnClickOutside = (e: MouseEvent) => {
    if(containerRef && containerRef.current && !containerRef.current.contains(e.target as Node)) {
      closeDropdown()
    }
  }

  // Update Active Dropdown Option Index On Keydown
  const handleDropdownKeydown = (e: KeyboardEvent) => {
    // Close the dropdown when 'Escape' is pressed
    if(e.key === 'Escape') {
      closeDropdown()
    }
    // Update the active dropdown option index when 'ArrowUp' or 'ArrowDown' is pressed
    if(setActiveDropdownOptionIndex) {
      if(e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveDropdownOptionIndex(Math.max(0, activeDropdownOptionIndex - 1))
      }
      if(e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveDropdownOptionIndex(Math.min(dropdownOptions.length - 1, activeDropdownOptionIndex + 1))
      }
    }
    // Select the active dropdown option when 'Enter' or 'Tab' is pressed
    if(selectDropdownOption && ([ 'Enter', 'Tab' ].includes(e.key))) {
      selectDropdownOption()
    }
  }

  return (
    <StyledDropdown
      className={className}
      isDropdownVisible={isDropdownVisible}
      maxHeight={maxHeight}>
      {children}
    </StyledDropdown>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
export interface IDropdownWithOptions {
  activeDropdownOptionIndex?: number
  className?: string
  containerRef: RefObject<HTMLElement>
  children?: any
  closeDropdown(): void
  dropdownOptions: any[]
  isDropdownVisible: boolean
  maxHeight?: string
  selectDropdownOption?(): void 
  setActiveDropdownOptionIndex?(nextActiveDropdownOptionIndex: number): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledDropdown = styled.div`
  z-index: 10;
  position: absolute;
  display: ${ ({ isDropdownVisible }: IStyledDropdown ) => isDropdownVisible ? 'block' : 'none' };
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 50vh;
  max-height: ${ ({ maxHeight }: IStyledDropdown ) => maxHeight };
  background-color: white;
  border: 1px solid rgb(200, 200, 200);
  overflow-y: scroll;
	scrollbar-width: none;
  -ms-overflow-style: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
`
interface IStyledDropdown {
  isDropdownVisible: boolean
  maxHeight: string
}

export default DropdownWithOptions