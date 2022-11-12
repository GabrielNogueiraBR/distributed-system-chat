import {
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea as ChakraTextArea,
  TextareaProps as ChakraTextAreaProps,
} from "@chakra-ui/react";

interface TextAreaProps extends ChakraTextAreaProps {
  name: string;
  label?: string;
  errorMessage?: string;
}

export function TextArea({
  name,
  label,
  isInvalid,
  errorMessage,
  ...rest
}: TextAreaProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="password">{label}</FormLabel>}
      <ChakraTextArea
        name={name}
        id={name}
        type="email"
        focusBorderColor="pink.500"
        backgroundColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          backgroundColor: "gray.900",
        }}
        {...rest}
      />
      {isInvalid && errorMessage && (
        <FormHelperText color="orange.400">{errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
}
