import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  errorMessage?: string;
}

export function Input({
  name,
  label,
  isInvalid,
  errorMessage,
  ...rest
}: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="password">{label}</FormLabel>}
      <ChakraInput
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
