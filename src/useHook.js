import { useContext, useState } from "react";

// useHook 
/**
 * not suitable 
 *  => creates new isOpen for each call 
 *  => can't share isOpen across components
 */
export function useHook() {
  const [isOpen, setIsOpen] = useState(false);

  return { isOpen, setIsOpen };
}

// useContextHook
/**
 * Solution -> pass isOpen, setIsOpen to provider
 * =>  isOpen + setIsOpen are available in all components inside provider
 */
export function useContextHook(passedContext) {
  const context = useContext(passedContext); 
  const {isOpen, setIsOpen, content, setContent} = context; 
  
  return { isOpen, setIsOpen, content, setContent };
}

// portal
/** 
 * not suitable 
 *  => can't make isOpen, setIsOpen available to all components
 */

// refactor => improve interface by moving code from App to hook
