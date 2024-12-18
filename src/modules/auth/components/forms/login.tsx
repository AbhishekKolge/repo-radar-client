import { useState } from 'react';
import { Logo } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ASSETS, env } from '@/shared/utils';

export const LoginForm = () => {
  const [isGitHubLogging, setIsGitHubLogging] = useState<boolean>(false);

  const githubLoginHandler = () => {
    if (isGitHubLogging) {
      return;
    }
    setIsGitHubLogging(true);
    window.location.href = env.VITE_GITHUB_LOGIN_URL;
  };

  return (
    <div className="h-full grid justify-center">
      <Card className="w-full md:w-[450px] border-none shadow-none grid place-content-center">
        <CardHeader>
          <Logo className="lg:hidden justify-center" />
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            disabled={isGitHubLogging}
            className="w-full"
            onClick={githubLoginHandler}
            size="lg"
          >
            <img className="w-8 h-8" src={ASSETS.icons.logos.githubLight} alt="google logo" />
            Continue with GitHub
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <p className="text-xs md:text-sm text-center w-full md:w-[350px]">
            By clicking continue, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
