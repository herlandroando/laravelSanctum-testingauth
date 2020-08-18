## Laravel Sanctum with ReactJS
This is an example to create SPA authentication using the *Laravel Sanctum* with the front-end framework used is *ReactJS*. This repos just for practice, not for production method because I don't know whether my method is proven to be very safe or not. I also just learned React JS and Laravel here recently. So if something is not in accordance with the existing rules, I am sorry.

## Requirements for this Repos

 1. Laravel UI for generate basic scaffolding React JS and Auth.
 2. Laravel Sanctum.
 3. React Reveal (For testing only, you can remove the component at App.js and uninstall it).
 4. React Redux.
 5. Redux.
 6. React Toastify (For testing only, you can uninstall it).
 7. Node JS
## Important
This is just for one server with back-end and front-end. Don't forget to command at the project folder:

    npm install
and

    npm run dev
## Preparation

1. Laravel is already installed (For Mac it is recommended to install Laravel Valet for easy configure and many feature you will like!)  
2. The Node JS has been installed  
3. Prepare a new laravel project and set the db settings in .env  
4. Execute command: 

	`composer require laravel / ui` 
	`php artisan ui react --auth`
	`composer require laravel / sanctum`

5. .env settings that need to be added
 
	`SESSION_DOMAIN = .sikbantul.test //(Server domain name)  `
	`SESSION_DRIVER = cookie  `
	`SANCTUM_STATEFUL_DOMAINS = sikbantul.test //(SPA domain name)`
6. In app / http / kernel.php add in the array of api above the throttle  
`EnsureFrontendRequestsAreStateful :: class,`
7. In the sanctum.php config section in the SANCTUM_STATEFUL_DOMAINS section add something like no.6 sikbantul.test to take care when it does happen unauthicated continuously.
8.  In the cors.php config, configure something like this:  
` 'paths' => [  
'api/*',  
'/login',  
'/logout',  
'/sanctum/csrf-cookie'  
],  `
and  
`supports_credentials' => true,`
9. Add the configuration below window.axios ... in bootstrap.js   `axios.defaults.withCredentials = true;`
10. Create a LoginController  
(Example: https://github.com/herlandroando/laravelSanctum-testingauth/blob/master/app/Http/Controllers/Api/LoginController.php) 
11. Set the ReactJS rendering on a single blade page by creating a file app.blade.php  
(Example: https://github.com/herlandroando/laravelSanctum-testingauth/blob/master/resources/views/app.blade.php)
12. For the rest front-end, see https://github.com/herlandroando/laravelSanctum-testingauth/tree/master/resources/js
