import React from 'react';

interface FormActionsProps {
  onClose: () => void;
  isSubmitting?: boolean;
}

function FormActions({ onClose, isSubmitting = false }: FormActionsProps) {
  return (
    <div className="flex justify-end gap-3 pt-4 border-t">
      <button
        type="button"
        onClick={onClose}
        disabled={isSubmitting}
        className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
      >
        İptal
      </button>
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            Ekleniyor...
          </>
        ) : (
          'Sertifika Ekle'
        )}
      </button>
    </div>
  );
}

export default FormActions;