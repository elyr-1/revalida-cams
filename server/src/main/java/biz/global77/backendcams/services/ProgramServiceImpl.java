package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Program;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import static com.tej.JooQDemo.jooq.sample.model.Tables.*;

/* CRUD functions for program */
@Service
public class ProgramServiceImpl implements ProgramService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add a program */
    @Override
    public Program insertProgram(Program program) {
        dsl.insertInto(PROGRAM,
                PROGRAM.PROGRAM_CODE,
                PROGRAM.PROGRAM_TITLE,
                PROGRAM.MAJOR)
        .values(
                program.getProgramCode(),
                program.getProgramTitle(),
                program.getMajor())
        .execute();
        return program;
    }

    /* get all programs */
    @Override
    public List<Program> getPrograms() {
        return dsl.selectFrom(PROGRAM)
                .orderBy(PROGRAM.PROGRAM_CODE)
                .fetchInto(Program.class);
    }

    /* get a program by ID */
    @Override
    public Program getProgramById(Integer programId) {
        return dsl.selectFrom(PROGRAM)
                .where(PROGRAM.PROGRAM_ID.eq(programId))
                .fetchOneInto(Program.class);
    }

    /* update program detail(s) */
    @Override
    public Program updateProgram(Integer programId, Program program) {
        dsl.update(PROGRAM)
                .set(PROGRAM.PROGRAM_CODE, program.getProgramCode())
                .set(PROGRAM.PROGRAM_TITLE, program.getProgramTitle())
                .set(PROGRAM.MAJOR, program.getMajor())
                .where(PROGRAM.PROGRAM_ID.eq(programId))
                .execute();
        return program;
    }

    /* delete a program */
    @Override
    public void deleteProgramById(Integer programId) {
        dsl.deleteFrom(PROGRAM)
                .where(PROGRAM.PROGRAM_ID.eq(programId))
                .execute();
    }

}
