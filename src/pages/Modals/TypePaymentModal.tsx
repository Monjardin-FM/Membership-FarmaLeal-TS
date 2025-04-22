import React from "react";
import { AppModal } from "../../presentation/Components/AppModal/AppModal";
import Payment1 from "../../assets/img/PagoMembresia_155.png";
import Payment2 from "../../assets/img/PagoMembresia_175.png";
import { Table } from "../../components/Table";
export type TypePaymentModalProps = {
  isVisible: boolean;
  onClose: () => void;
  onOpenPaymentModal: (type: string) => void;
};

export const TypePaymentModal = ({
  isVisible,
  onClose,
  onOpenPaymentModal,
}: TypePaymentModalProps) => {
  return (
    <AppModal onClose={onClose} isVisible={isVisible}>
      <div className="h-full overflow-y-auto">
        <Table onOpenPaymentModal={onOpenPaymentModal} />
      </div>
    </AppModal>
  );
};
