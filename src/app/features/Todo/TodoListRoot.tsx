import { useMeQuery } from "../../../api/auth/auth.queries";
import { TemplatePage } from "../../shared/components/templates/TemplatePage/TemplatePage";
import { AsyncQueryView } from "../../shared/components/z/AsyncQueryView/AsyncQueryView";

export const TodoListRoot = () => {
  const meQuery = useMeQuery();

  return (
    <TemplatePage>
      {/* Table */}
      <div className="w-full h-fit border-[1px] border-solid border-[#E8E8E8] rounded-md p-3">
        <AsyncQueryView
          query={meQuery}
          data={data => <div>{JSON.stringify(data)}</div>}
        />
      </div>
    </TemplatePage>
  );
};
