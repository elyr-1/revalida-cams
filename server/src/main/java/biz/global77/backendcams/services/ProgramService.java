package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Program;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProgramService {

    @Autowired
    private DSLContext dsl;

    /* add a program */
    public void insertProgram(Program program) {
        dsl.insertInto(Tables.PROGRAM,
                Tables.PROGRAM.PROGRAM_CODE,
                Tables.PROGRAM.PROGRAM_TITLE,
                Tables.PROGRAM.MAJOR)
        .values(
                program.getProgramCode(),
                program.getProgramTitle(),
                program.getMajor())
        .execute();
    }

    /* get all programs */
    public List<Program> getPrograms() {
        return dsl.selectFrom(Tables.PROGRAM).fetchInto(Program.class);
    }

    /* get a program by ID */
    public Program getProgramById(Integer programId) {
        return dsl.selectFrom(Tables.PROGRAM)
                .where(Tables.PROGRAM.PROGRAM_ID.eq(programId))
                .fetchOneInto(Program.class);
    }

    /* delete a program */
    public void deleteProgramById(Integer programId) {
        dsl.deleteFrom(Tables.PROGRAM)
                .where(Tables.PROGRAM.PROGRAM_ID.eq(programId))
                .execute();
    }

    /* update program detail(s) */
    public void updateProgram(Integer programId, Program program) {
        dsl.update(Tables.PROGRAM)
                .set(Tables.PROGRAM.PROGRAM_CODE, program.getProgramCode())
                .set(Tables.PROGRAM.PROGRAM_TITLE, program.getProgramTitle())
                .set(Tables.PROGRAM.MAJOR, program.getMajor())
                .where(Tables.PROGRAM.PROGRAM_ID.eq(programId))
                .execute();
    }

}
