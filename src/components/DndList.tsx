import { useListState } from "@mantine/hooks";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Text } from "@mantine/core";

interface DndListProps {
  data: {
    position: number;
    name: string;
    id: string;
    color?: string;
  }[];
}

export function DndList({ data }: DndListProps) {
  const [state, handlers] = useListState(data);

  const items = state.map((item, index) => (
    <Draggable key={item.name} index={index} draggableId={item.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="flex items-center p-4 mb-2 shadow-lg "
          style={{
            ...provided.draggableProps.style,
            ...provided.dragHandleProps.style,
            backgroundColor: item.color || "#fff",
            color: "white",
          }}
        >
          <Text weight={"bold"}>{item.name.toUpperCase()}</Text>
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        handlers.reorder({ from: source.index, to: destination?.index || 0 });
      }}
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className=""
          >
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
