package biz.global77.backendcams.security;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.AdminUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.Collection;

/* This class inherits from AdminUser pojo
* and implements methods from UserDetails interface
* related to basic user information and login authentication */
public class AdminUserDetails extends AdminUser implements UserDetails {

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
