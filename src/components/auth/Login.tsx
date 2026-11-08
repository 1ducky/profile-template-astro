
import { useRef } from "react";
import type { LoginInput } from "../../app/feature/auth/types";
import { authApi } from "../../app/feature/auth";
import { GetListArticle } from "../../app/feature/article";

export default function LoginForm({ onLogin }: { onLogin: (req: LoginInput) => void }) {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = emailRef.current?.value.trim();
        const password = passwordRef.current?.value;

        if (!email || !password) return;

        const payload = {
            email,
            password,
        };

        onLogin(payload)

        // Contoh integrasi API:
        // await authService.login(payload);
    };

    return (
        <form onSubmit={handleSubmit} method="post">
            <div>
                <label htmlFor="email">Email</label>
                <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    ref={passwordRef}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                />
            </div>

            <button type="submit">
                Login
            </button>
        </form>
    );
}

export function Login() {
    const onLogin = async (req: LoginInput) => {
        const article = await GetListArticle()
        console.log(article)
        try {

            const res = await authApi.login(req)
            console.log(res)
        } catch (e) {
            console.log(e)
        }

    }

    return <LoginForm onLogin={onLogin} />
}