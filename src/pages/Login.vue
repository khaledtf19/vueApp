<template>
  <Card>
    <template #title>Login</template>
    <template #content>
      <form class="form-container" @submit="onSubmit">
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
              <InputText type="password" id="password" v-model="password" :invalid="errors.email" />
              <label for="password">Password</label>
            </FloatLabel>
          </InputGroup>
          <small>{{ errors.password }}</small>
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
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import z from 'zod';
import { useToast } from 'primevue/usetoast';
const toast = useToast();

const loginSchema = toTypedSchema(z.object({
  email: z.string().email("must be an email").min(6, "Must be more than 6 chars").max(200, "must be less tahn 200 chars"),
  password: z.string().min(8, "Must be more than 8 chars").max(200, "Must be less than 200 chars")
}))

const { handleSubmit, errors } = useForm({
  validationSchema: loginSchema
});

const { value: email } = useField('email');
const { value: password } = useField('password');


function errorClick() {
  if (errors.value.password || errors.value.email) {
    toast.add({ severity: "error", summary: 'Error Message', detail: 'Error when submit', life: 3000 })
  }
}

const onSubmit = handleSubmit(values => {
  toast.add({ severity: 'success', summary: 'Logedin', detail: 'User Logedin', life: 3000 });
  alert(JSON.stringify(values, null, 2));
});
</script>

<style scoped>
small {
  color: red;
}
</style>
