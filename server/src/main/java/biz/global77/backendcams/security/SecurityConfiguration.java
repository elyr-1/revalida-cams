//package biz.global77.backendcams.security;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.cglib.proxy.NoOp;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.AuthenticationProvider;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;
//
//import static org.springframework.security.config.http.SessionCreationPolicy.*;
//
///* WebSecurityConfigurerAdapter in deprecated in Spring Security 5.7
//* For Spring Security without the WebSecurityConfigurerAdapter, refer to
//* https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter */
//@Configuration
//@EnableWebSecurity
//public class SecurityConfiguration {
//
//    /* for testing purposes only; do not use for production */
//    @Bean
//    public UserDetailsService userDetailsService() {
//
//        UserDetails admin = User.withDefaultPasswordEncoder()
//                .username("admin")
//                .password("test")
//                .roles("ADMIN")
//                .build();
//
//        UserDetails student = User.withDefaultPasswordEncoder()
//                .username("stud")
//                .password("test")
//                .roles("STUDENT")
//                .build();
//
//        return new InMemoryUserDetailsManager( admin, student);
//    }
//
//    /* handle http security; configure AUTHORIZATION */
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        return http
//                .csrf(csrf -> csrf.disable())
//                .authorizeRequests(auth -> {
//                    auth.antMatchers("/").permitAll();
//                    auth.antMatchers("/api/admin").hasRole("ADMIN");
//                    auth.antMatchers("/api/student").hasRole("STUDENT");
//                })
//                .formLogin()
//                .and()
//                .build();
//    }
////    @Override
////    protected void configure(HttpSecurity httpSecurity) throws Exception {
////        httpSecurity
////            .authorizeRequests()
////            .anyRequest()
////            .authenticated()
////            .and()
////            .formLogin();
////    }
//
//    /* handle web security; configure AUTHENTICATION */
////    @Override
////    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
////        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
////    }
//
////    @Bean
////    @Override
////    public AuthenticationManager authenticationManagerBean() throws Exception {
////        return super.authenticationManagerBean();
////    }
////
//}