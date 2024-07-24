'use client';

import { useState } from 'react';
import useAuthSession from '../hooks/useAuthSession';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { toast } from 'react-toastify';

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error, login } = useAuthSession();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && password) {
      login({ username, password }).then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          toast.success('Login successful!');
        } else {
          //toast.error(res.error.message);
        }
      });
    } else {
      toast.error('Please fill in both fields');
    }
  };

  return (
    <div className=''>
      <Card className='bg-gray-200   p-2 rounded-lg shadow-xl'>
    <CardHeader className="space-y-1">
      <CardTitle className="text-2xl m-1 text-center">Login</CardTitle>
      <CardDescription>
      </CardDescription>
    </CardHeader>
    <form onSubmit={handleSubmit}>

    <CardContent className="grid gap-4">
      <div className="grid grid-cols-2 gap-6">
        <Button variant="outline">
          <Icons.gitHub className="mr-2 h-4 w-4" />
          Github
        </Button>
        <Button variant="outline">
          <Icons.google className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className=" px-2 font-semibold text-gray-600">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid gap-2">
      <Label htmlFor="username">Username</Label>
            <Input 
              id="username" 
              type="text" 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
      </div>
      <div className="grid gap-2">
      <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
      </div>
    </CardContent>
    <CardFooter>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </CardFooter>
        </form>

  </Card>
    </div>
    
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //     placeholder="Username"
    //   />
    //   <input
    //     type="password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     placeholder="Password"
    //   />
    //   <button type="submit" disabled={loading}>Login</button>
    //   {error && <p>{error}</p>}
    // </form>
  );
};

export default LoginForm;
