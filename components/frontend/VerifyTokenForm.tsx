"use client";
 
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { updateUserById } from "@/actions/users";
 
const FormSchema = z.object({
  token: z.string().min(6, {
    message: "Votre code doit contenir 6 caractères.",
  }),
});
 
export default function VerifyTokenForm({
  userToken,
  id,
}: {
  userToken: number | undefined;
  id: string;
}) {
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      token: "",
    },
  });
 
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    const userInputToken = parseInt(data.token);
    if (userInputToken === userToken) {
      setShowNotification(false);
      //Update User
      try {
        await updateUserById(id);
        setLoading(false);
        // reset();
        toast.success("Compte vérifié");
        router.push("/login");
      } catch (error) {
        setLoading(false);
      }
    } else {
      setShowNotification(true);
      setLoading(false);
    }
  }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col items-center">
        {showNotification && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">Code incorrect !</span> Veuillez vérifier le code et le saisir à nouveau
          </Alert>
        )}
        <FormField
          control={form.control}
          name="token"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Entrez le code ici</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Veuillez entrer le code à 6 chiffres envoyé à votre adresse e-mail.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
 
        <Button className="w-1/3" type="submit">Soumettre</Button>
      </form>
    </Form>
  );
}