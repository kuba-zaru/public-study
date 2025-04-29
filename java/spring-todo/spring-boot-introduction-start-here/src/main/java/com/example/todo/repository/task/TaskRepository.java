package com.example.todo.repository.task;

import com.example.todo.service.task.TaskEntity;
import com.example.todo.service.task.TaskSearcEntity;
import org.apache.ibatis.annotations.*;

import java.util.List;
import java.util.Optional;

/**
 * TaskRepository
 */
@Mapper
public interface TaskRepository {

    /**
     * taskを検索取得する
     *
     * @return taskリスト
     */
    @Select("""
            <script>
              SELECT id, summary, description, status 
              FROM tasks
              <where>
                <if test="condition.summary != null and !condition.summary.isBlank()">
                  summary LIKE CONCAT('%', #{condition.summary}, '%')
                </if>
                <if test="condition.status != null and !condition.status.isEmpty()"  >
                  AND status IN (
                    <foreach item="item" index="index" collection="condition.status" separator="," >
                      #{item}
                    </foreach>
                  )
                </if>
              </where>
            </script>
            """)
    List<TaskEntity> select(@Param("condition") TaskSearcEntity condition);

    /**
     * taskを1件取得する
     *
     * @param id タスクID
     * @return task
     */
    @Select("SELECT id, summary, description, status FROM tasks where id = #{id};")
    Optional<TaskEntity> selectById(@Param("id") long id);

    /**
     * taskを作成する
     *
     * @param newEntity 新規task
     */
    @Insert("""
            INSERT INTO tasks(summary, description, status)
            VALUES(#{task.summary}, #{task.description}, #{task.status})
            """)
    void insert(@Param("task") TaskEntity newEntity);

    /**
     * taskを更新する
     *
     * @param entity 更新task
     */
    @Update("""
            UPDATE tasks
            SET
                summary = #{task.summary}
                , description = #{task.description}
                , status = #{task.status}
            WHERE id = #{task.id}
            """)
    void update(@Param("task") TaskEntity entity);

    /**
     * taskを削除する
     *
     * @param id タスクID
     */
    @Delete("DELETE FROM tasks WHERE id = #{id}")
    void delete(@Param("id") long id);
}
