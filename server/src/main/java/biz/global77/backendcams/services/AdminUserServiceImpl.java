package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.AdminUser;
import org.jooq.DSLContext;
//import org.jooq.Record;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

//import java.util.ArrayList;
//import java.util.Collection;
import java.util.List;

/* CRUD functions for Admin */
@Service
public class AdminUserServiceImpl implements AdminUserService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* method in UserDetailsService interface
    * to obtain user information in the database */
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        AdminUser adminUser = dsl.select().from(Tables.ADMIN_USER)
//                .where(Tables.ADMIN_USER.USERNAME.eq(username))
//                .fetchOneInto(AdminUser.class);
//        if (adminUser == null) {
//            throw new UsernameNotFoundException("User not found");
//        }
//        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
//        authorities.add(new SimpleGrantedAuthority(adminUser.getUsername()));
//        return new User(adminUser.getUsername(), adminUser.getPassword(), authorities);
//    }

    /* add an admin */
    @Override
    public AdminUser insertAdminUser(AdminUser admin) {
        dsl.insertInto(Tables.ADMIN_USER,
                Tables.ADMIN_USER.FIRSTNAME,
                Tables.ADMIN_USER.LASTNAME,
                Tables.ADMIN_USER.USERNAME,
                Tables.ADMIN_USER.PASSWORD,
                Tables.ADMIN_USER.ROLE_ID)
        .values(
                admin.getFirstname(),
                admin.getLastname(),
                admin.getUsername(),
                admin.getPassword(),
                admin.getRoleId())
        .execute();
        return admin;
    }

    /* get all admin users */
    @Override
    public List<AdminUser> getAdminUsers() {
        return dsl.selectFrom(Tables.ADMIN_USER)
                .orderBy(Tables.ADMIN_USER.LASTNAME.desc())
                .fetchInto(AdminUser.class);
    }

    /* get an admin by ID */
    @Override
    public AdminUser getAdminById(Integer adminId) {
        return dsl.selectFrom(Tables.ADMIN_USER)
                .where(Tables.ADMIN_USER.ADMIN_ID.eq(adminId))
                .fetchOneInto(AdminUser.class);
    }

    /* update admin detail(s) */
    @Override
    public AdminUser updateAdminUser(Integer adminId, AdminUser admin) {
        dsl.update(Tables.ADMIN_USER)
                .set(Tables.ADMIN_USER.FIRSTNAME, admin.getFirstname())
                .set(Tables.ADMIN_USER.LASTNAME, admin.getLastname())
                .set(Tables.ADMIN_USER.USERNAME,admin.getUsername())
                .where(Tables.ADMIN_USER.ADMIN_ID.eq(adminId))
                .execute();
        return admin;
    }

    /* delete an admin by ID */
    @Override
    public void deleteAdminUserById(Integer adminId) {
        dsl.deleteFrom(Tables.ADMIN_USER)
                .where(Tables.ADMIN_USER.ADMIN_ID.eq(adminId))
                .execute();
    }

}
