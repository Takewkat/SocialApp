import React from 'react';
import classes from './Textarea.module.css'

//for Messages and New-post foms
export function Textarea({input, meta, ...props}) {
  console.log(meta);
  let hasError = meta.touched && meta.error;

  return (
    <div className={classes['textarea']}>
      <textarea className={
        classes['textarea__field']+' '+ (hasError ? classes['error'] : '') 
      } {...input} {...props}/>
      {hasError && <div className={classes['textarea__error']}>{meta.error}</div>}      
    </div>
  )
}
/*
//HOW TO REDUCE COPYPASTE ?
const FormControl = ({input,meta,Formtype, ...props}) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
      <div>
          <Formtype {...input} {...props} />
      </div>
      <div>
          {hasError && <span>{meta.error}</span> }
      </div>
    </div>
  )
}
export const Textarea = (props) => {
  return <FormControl {...props} Formtype="textarea"></FormControl>
}
//for authpage
export const Input = (props) => {
  return <FormControl {...props} Formtype="input"></FormControl>
}
*/