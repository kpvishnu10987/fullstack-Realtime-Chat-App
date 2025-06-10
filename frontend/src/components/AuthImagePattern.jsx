const AuthImagePattern = ({ title, subtitle }) => {
  return (
   <div className="hidden lg:flex w-full h-full bg-base-100 items-center justify-center px-10">
  <div className="flex flex-col justify-between h-[80%] max-h-[720px] w-full items-center">
    <div className="grid grid-cols-3 gap-6 mt-24">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="w-24 h-24 bg-base-200 rounded-xl shadow-inner transition-transform duration-300 hover:scale-105"
        />
      ))}
    </div>

    <div className="text-center text-base-content mb-14 max-w-lg px-6">
      <h2 className="text-2xl font-bold mb-2">
        {title || "Join our community"}
      </h2>
      <p className="text-base-content/60 leading-relaxed">
        {subtitle ||
          "Connect with friends, share moments, and stay in touch with your loved ones."}
      </p>
    </div>
  </div>
</div>

  );
};
export default AuthImagePattern;
//  return (
//     <div className="min-h-screen grid lg:grid-cols-2">
//       {/* left side */}
//       <div className="flex flex-col justify-center items-center p-6 sm:p-12">
//         <div className="w-full max-w-md space-y-8">
//           {/* Logo */}
//           <div className="text-center mb-8">
//             <div className="flex flex-col items-center gap-2 group">
//               <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                 <MessageSquare className="size-6 text-primary" />
//               </div>
//               <h1 className="text-2xl font-bold mt-2">Create Account</h1>
//               <p className="text-base-content/60">Get started with your free account</p>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-6">
//   {/* Full Name */}
//   <div className="form-control">
//     <label className="label">
//       <span className="label-text font-medium">Full Name</span>
//     </label>
//     <div className="relative">
//       <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
//         <User className="w-5 h-5 text-base-content opacity-50" />
//       </span>
//       <input
//         type="text"
//         className="input input-bordered w-full pl-12"
//         placeholder="John Doe"
//         value={formData.fullName}
//         onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//       />
//     </div>
//   </div>

//   {/* Email */}
//   <div className="form-control">
//     <label className="label">
//       <span className="label-text font-medium">Email</span>
//     </label>
//     <div className="relative">
//       <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
//         <Mail className="w-5 h-5 text-base-content opacity-50" />
//       </span>
//       <input
//         type="email"
//         className="input input-bordered w-full pl-12"
//         placeholder="you@example.com"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />
//     </div>
//   </div>

//   {/* Password */}
//   <div className="form-control">
//     <label className="label">
//       <span className="label-text font-medium">Password</span>
//     </label>
//     <div className="relative">
//       <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
//         <Lock className="w-5 h-5 text-base-content opacity-50" />
//       </span>
//       <input
//         type={showPassword ? 'text' : 'password'}
//         className="input input-bordered w-full pl-12"
//         placeholder="••••••••"
//         value={formData.password}
//         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//       />
//       <button
//         type="button"
//         className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
//         onClick={() => setShowPassword(!showPassword)}
//       >
//         {showPassword ? (
//           <EyeOff className="w-5 h-5 text-base-content opacity-50" />
//         ) : (
//           <Eye className="w-5 h-5 text-base-content opacity-50" />
//         )}
//       </button>
//     </div>
//   </div>
//   <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
//               {isSigningUp ? (
//                 <>
//                   <Loader2 className="size-5 animate-spin" />
//                   Loading...
//                 </>
//               ) : (
//                 "Create Account"
//               )}
//             </button>
// </form>
//               <div className="text-center">
//                 <p className="text-base-content/60">
//                 Already have an account?{" "}
                
//                 <Link to="/login" className="link link-primary">
//                 Sign in
//               </Link>
//               </p>
//               </div>
//         </div>
//       </div>
// <div className="hidden lg:block">
//   <AuthImagePattern
//     title="Join our community"
//     subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
//   />
// </div>
//     </div>
//   );
// };

// export default SignUpPage;

