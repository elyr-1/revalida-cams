package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.Tables;
import lombok.extern.slf4j.Slf4j;
import org.jooq.DSLContext;
import org.jooq.Record;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService implements UserDetailsService {

    @Autowired
    DSLContext dsl;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Record record = dsl.selectFrom(Tables.USERS).where(Tables.USERS.USERNAME.eq(username)).fetchAny();
        log.info(record.toString());
        if (record == null) {
            throw new UsernameNotFoundException(String.format("Username %s not found", username));
        }
        return record.into(UserInformationService.class);
    }

}
