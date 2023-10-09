import { Button } from "@/components/ui/button"
import supabase from "@/supabase"

const LoginPage = ()=>{
    const loginWithGoogle = ()=>{
        supabase.auth.signInWithOAuth({
            provider: 'google',
          })          
    }
    return <section className="w-full container">
        <h2>
            Hello
        </h2>
        <Button onClick={loginWithGoogle} variant="secondary"> Google Signin</Button>

    </section>
}

export default LoginPage;