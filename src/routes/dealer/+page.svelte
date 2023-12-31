<script>
  import src from "/src/icons/back-svgrepo-com.png";
  import {
    useForm,
    validators,
    HintGroup,
    Hint,
    email,
    required,
    minLength
  } from "svelte-use-form";
  import { passwordMatch, containNumbers } from "./customValidators.js";

  const form = useForm();
  const requiredMessage = "This field is required";
</script>

<svelte:head>
  <title>Dealer Page</title>
</svelte:head>

<a href="/" class="flex items-center hover:underline"
  ><img {src} alt="back" class="w-[1.6vw] mr-2" />Back to homepage</a
>

<h1 class="text-center text-4xl">Login/Registration Dealer</h1>

<div class="flex justify-between items-center h-screen">
  <div class="flex flex-col h-full justify-center item-center w-1/2">
    <h1 class="text-center text-4xl">Login</h1>

    <div>
      <form
        use:form
        class="flex flex-col w-2/3 aspect-video mx-auto justify-center"
      >
        <input
          type="email"
          name="email"
          use:validators={[required, email]}
          placeholder="Enter your adminID"
          class="mt-6 mb-3"
        />
        <HintGroup for="email">
          <Hint on="required">This is a mandatory field</Hint>
          <Hint on="email" hideWhenRequired>Email is not valid</Hint>
        </HintGroup>

        <input
          type="password"
          name="password"
          use:validators={[required]}
          placeholder="Enter your password"
          class="mb-6 mt-3"
        />
        <Hint for="password" on="required">This is a mandatory field</Hint>

        <button
          disabled={!$form.valid}
          class="border border-4 border-black w-1/2 mx-auto py-1 my-6"
          >Login</button
        >
      </form>
    </div>
  </div>

  <div class="text-3xl">OR</div>

  <div class="flex flex-col h-full justify-center item-center w-1/2">
    <h1 class="text-center text-4xl">Registration</h1>

    <div>
      <form
        use:form
        class="flex flex-col w-2/3 aspect-video mx-auto justify-center"
      >
      <!-- <label for="email">Email</label> -->
      <input type="email" name="email" use:validators={[required, email]} placeholder="Enter your EmailID" class="mt-6 mb-3"/>
      <HintGroup for="email">
        <Hint on="required">{requiredMessage}</Hint>
        <Hint on="email" hideWhenRequired>This must be a valid email</Hint>	
      </HintGroup>
  
      <!-- <label for="password">Password</label> -->
      <input type="password" name="password" use:validators={[required, minLength(5), containNumbers(2)]} placeholder="Enter your password" class="my-3"/>
      <HintGroup for="password">
        <Hint on="required">{requiredMessage}</Hint>
        <Hint on="minLength" hideWhenRequired let:value>This field must have at least {value} characters.</Hint>	
        <Hint on="containNumbers" hideWhen="minLength" let:value>
          This field must contain at least {value} numbers.
        </Hint>	
      </HintGroup>
  
      <!-- <label for="passwordConfirmation">Password Confirmation</label> -->
      <input type="password" name="passwordConfirmation" use:validators={[required, passwordMatch]} placeholder="Enter the password again to reconfirm" class="mt-3 mb-6"/>
      <HintGroup for="passwordConfirmation">
        <Hint on="required">{requiredMessage}</Hint>
        <Hint on="passwordMatch" hideWhenRequired>Passwords do not match</Hint>	
      </HintGroup><br />
  
      <button disabled={!$form.valid} on:click|preventDefault class="border border-4 border-black w-1/2 mx-auto py-1 my-6">
        Submit
      </button>
      </form>
      <div class="text-center text-red-500 font-bold">Note: Name, Information and Location will be generated using faker.js package</div>
    </div>
  </div>
</div>
