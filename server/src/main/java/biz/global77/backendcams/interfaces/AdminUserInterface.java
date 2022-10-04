package biz.global77.backendcams.interfaces;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.AdminUser;
import java.util.List;

public interface AdminUserInterface {

    List<AdminUser> getAdminUsers();
    AdminUser getAdminById(Integer adminId);
    AdminUser insertAdminUser(AdminUser admin);
    AdminUser updateAdminUser(Integer adminId, AdminUser admin);
    void deleteAdminUserById(Integer adminId);

}
