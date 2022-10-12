package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.AdminUser;
import java.util.List;

public interface AdminUserService {

    List<AdminUser> getAdminUsers();
    AdminUser getAdminById(Integer adminId);
    AdminUser insertAdminUser(AdminUser admin);
    AdminUser updateAdminUser(Integer adminId, AdminUser admin);
    void deleteAdminUserById(Integer adminId);

}
