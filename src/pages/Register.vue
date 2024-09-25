<template>
  <Card>
    <template #title>Resiter</template>
    <template #content>
      <form class="form-container" @submit="onSubmit">
        <div class="input-container">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user"></i>
            </InputGroupAddon>
            <FloatLabel>
              <InputText id="firstNAme" v-model="firstName" :invalid="errors.firstName" />
              <label for="firstNAme">First Name</label>
            </FloatLabel>
          </InputGroup>

          <small>{{ errors.firstName }}</small>
        </div>
        <div class="input-container">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user"></i>
            </InputGroupAddon>
            <FloatLabel>
              <InputText id="lastName" v-model="lastName" :invalid="errors.lastName" />
              <label for="lastName">Last Name</label>
            </FloatLabel>
          </InputGroup>

          <small>{{ errors.lastName }}</small>
        </div>
        <div class="input-container">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-user"></i>
            </InputGroupAddon>
            <FloatLabel>
              <InputText id="email" v-model="email" :invalid="errors.email" />
              <label for="email">Email</label>
            </FloatLabel>
          </InputGroup>

          <small>{{ errors.email }}</small>
        </div>

        <div class="input-container">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <FloatLabel>
              <Password type="password" id="password" v-model="password" :invalid="errors.password" />
              <label for="password">Password</label>
            </FloatLabel>
          </InputGroup>
          <small>{{ errors.password }}</small>
        </div>
        <div class="input-container">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <FloatLabel>
              <Password type="password" id="confirmPassword" v-model="confirmPassword"
                :invalid="errors.confirmPassword" />
              <label for="confirmPassword">Confirm Password</label>
            </FloatLabel>
          </InputGroup>
          <small>{{ errors.confirmPassword }}</small>
        </div>
        <Button class="btn-submit" type="submit" @click="errorClick">Submit</Button>
      </form>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Password from 'primevue/password';
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import z from 'zod';
import { useToast } from 'primevue/usetoast';
const toast = useToast();

const registerSchema = toTypedSchema(z.object({
  firstName: z.string().min(3, "Must be more than 3 chars").max(100, "Must Less than 100 chars"),
  lastName: z.string().min(3, "Must be more than 3 chars").max(100, "Must Less than 100 chars"),
  email: z.string().email("must be an email").min(6, "Must be more than 6 chars").max(200, "must be less tahn 200 chars"),
  password: z.string().min(8, "Must be more than 8 chars").max(200, "Must be less than 200 chars"),
  confirmPassword: z.string().min(8, "Must be more than 8 chars").max(200, "Must be less than 200 chars")
}).refine((data) => data.confirmPassword === data.password, {
  path: ["confirmPassword"],
  message: "Passwords don't match"
}))

const { handleSubmit, errors } = useForm({
  validationSchema: registerSchema
});

const { value: firstName } = useField('firstName');
const { value: lastName } = useField('lastName');
const { value: email } = useField('email');
const { value: password } = useField('password');
const { value: confirmPassword } = useField("confirmPassword")

function errorClick() {
  if (errors.value.password || errors.value.email || errors.value.confirmPassword || errors.value.firstName || errors.value.lastName) {
    toast.add({ severity: "error", summary: 'Error Message', detail: 'Error when submit', life: 3000 })
  }
}
const onSubmit = handleSubmit(values => {
  toast.add({ severity: 'success', summary: 'Registered', detail: 'User Registered', life: 3000 });
  alert(JSON.stringify(values, null, 2));
});

</script>

<style scoped>
small {
  color: red;
}
</style>
