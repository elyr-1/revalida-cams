package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Parent;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ParentServiceImpl implements ParentService {

    @Autowired
    private DSLContext dsl;

    @Override
    public List<Parent> getParents() {
        return dsl.selectFrom(Tables.PARENT)
                .orderBy(Tables.PARENT.PARENT_NO)
                .fetchInto(Parent.class);
    }

    @Override
    public Parent getParentById(Integer parentId) {
        return dsl.selectFrom(Tables.PARENT)
                .where(Tables.PARENT.PARENT_ID.eq(parentId))
                .fetchOneInto(Parent.class);
    }

    @Override
    public Parent insertParent(Parent parent) {
        dsl.insertInto(Tables.PARENT,
                Tables.PARENT.PARENT_NO,
                Tables.PARENT.PARENT_NAME,
                Tables.PARENT.STUDENT_NO,
                Tables.PARENT.ID)
        .values(
                parent.getParentNo(),
                parent.getParentName(),
                parent.getStudentNo(),
                parent.getId())
        .execute();
        return parent;
    }

    @Override
    public Parent updateParent(Integer parentId, Parent parent) {
        dsl.update(Tables.PARENT)
                .set(Tables.PARENT.PARENT_NO, parent.getParentNo())
                .set(Tables.PARENT.PARENT_NAME, parent.getParentName())
                .set(Tables.PARENT.STUDENT_NO, parent.getStudentNo())
                .set(Tables.PARENT.ID, parent.getId())
                .where(Tables.PARENT.PARENT_ID.eq(parentId))
                .execute();
        return parent;
    }

    @Override
    public void deleteParentById(Integer parentId) {
        dsl.deleteFrom(Tables.PARENT)
                .where(Tables.PARENT.PARENT_ID.eq(parentId))
                .execute();
    }

}
